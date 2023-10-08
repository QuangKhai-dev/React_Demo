/* eslint-disable no-unused-vars */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// hoTen, email, soDienThoai, matKhau, nhapLaiMatKhau,facebookUrl

const DemoFormik = () => {
  const formik = useFormik({
    initialValues: {
      hoTen: '',
      email: '',
      soDienThoai: '',
      facebookUrl: '',
      matKhau: '',
      nhapLaiMatKhau: '',
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));

      // sau khi xử lí xong hết các dữ liệu
      resetForm();
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required('Vui lòng không bỏ trống'),
      email: Yup.string()
        .required('Vui lòng không bỏ trống')
        .email('Định dạng email không chính xác'),
      soDienThoai: Yup.string()
        .required('Vui lòng không bỏ trống')
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          'Định dạng số điện thoại không chính xác'
        ),
      facebookUrl: Yup.string()
        .required('Vui lòng không bỏ trống')
        .matches(
          '(?:(?:http|https)://)?(?:www.)?facebook.com/?',
          'Định dạng facebook Url không chính xác'
        ),
      matKhau: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Vui lòng nhập tối thiểu 6 ký tự')
        .max(10, 'Vui lòng nhập tối đa 10 ký tự')
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          'Mật khẩu phải có số và ký tự đặc biệt'
        ),
      nhapLaiMatKhau: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .oneOf([Yup.ref('matKhau')], 'Mật khẩu nhập lại chưa trùng khớp'),
    }),
  });

  const { handleChange, handleSubmit, errors, handleBlur, touched, values } =
    formik;
  // console.log(errors);
  // console.log(touched);
  console.log(values);

  return (
    <div className="container mx-auto py-20">
      <h1 className="font-bold text-3xl mb-5">Bài tập sử dụng formik</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-3">
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Họ tên
            </label>
            <input
              type="text"
              id="hoTen"
              name="hoTen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nhập tên"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoTen}
            />
            {/* xử lí nếu có error và người dùng đã click vào input và bấm ra ngoài thì mới show lỗi  */}
            {errors.hoTen && touched.hoTen && (
              <p className="text-red-500 mt-1 text-sm">{errors.hoTen}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nhập email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="soDienThoai"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              id="soDienThoai"
              name="soDienThoai"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nhập số điện thoại"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDienThoai}
            />
            {errors.soDienThoai && touched.soDienThoai && (
              <p className="text-red-500 mt-1 text-sm">{errors.soDienThoai}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="facebookUrl"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Facebook URL
            </label>
            <input
              type="text"
              id="facebookUrl"
              name="facebookUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nhập Facebook URL"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.facebookUrl}
            />
            {errors.facebookUrl && touched.facebookUrl && (
              <p className="text-red-500 mt-1 text-sm">{errors.facebookUrl}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="matKhau"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu
            </label>
            <input
              type="text"
              id="matKhau"
              name="matKhau"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nhập mật khẩu"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.matKhau}
            />
            {errors.matKhau && touched.matKhau && (
              <p className="text-red-500 mt-1 text-sm">{errors.matKhau}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="nhapLaiMatKhau"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nhập lại mật khẩu
            </label>
            <input
              type="text"
              id="nhapLaiMatKhau"
              name="nhapLaiMatKhau"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nhập lại mật khẩu"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nhapLaiMatKhau}
            />
            {errors.nhapLaiMatKhau && touched.nhapLaiMatKhau && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.nhapLaiMatKhau}
              </p>
            )}
          </div>
          <div className="mb-3 space-x-5">
            <button
              type="submit"
              className="bg-black text-white py-2 px-5 rounded"
            >
              Thêm người dùng
            </button>
            <button className="bg-yellow-600 text-white py-2 px-5 rounded">
              Cập nhật người dùng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemoFormik;
