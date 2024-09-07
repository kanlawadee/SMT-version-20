import React, { useState } from "react";
import "../Login/login.css";
import LOGO from "../../image/logo.jpg";
import VIEW from "../../image/view.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate username
    if (!username) {
      errors.username = "กรุณากรอกชื่อผู้ใช้";
      valid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      errors.username = "ชื่อผู้ใช้ควรประกอบด้วยตัวอักษรและตัวเลขเท่านั้น";
      valid = false;
    }

    // Validate password
    if (!password) {
      errors.password = "กรุณากรอกรหัสผ่าน";
      valid = false;
    } else if (password.length < 8) {
      errors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "รหัสผ่านต้องมีตัวอักษรพิมพ์ใหญ่";
      valid = false;
    } else if (!/[a-z]/.test(password)) {
      errors.password = "รหัสผ่านต้องมีตัวอักษรพิมพ์เล็ก";
      valid = false;
    } else if (!/[0-9]/.test(password)) {
      errors.password = "รหัสผ่านต้องมีตัวเลข";
      valid = false;
    } else if (!/[\W_]/.test(password)) {
      errors.password = "รหัสผ่านต้องมีอักขระพิเศษ";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log("Username:", username);
      console.log("Password:", password);

      // Redirect to the specified URL after successful validation
      window.location.href = "http://127.0.0.1:5000";
    }
  };

  return (
    <div className="app-container">
      <img className="bg-img" src={VIEW} alt="background" />
      <div className="login-box">
        <div className="user-icon">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="text">
          <h2>สำนักงานตำรวจแห่งชาติ</h2>
          <p>SMART TICKET</p>
        </div>

        <div className="input-group">
          <label htmlFor="username"></label>
          <input
            placeholder="ชื่อผู้ใช้"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          <label htmlFor="password"></label>

          <div className="password-container">
            <input
              placeholder="รหัสผ่าน"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "ซ่อน" : "แสดง"}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <div className="list-password">
            <div className="remember">
              <input type="checkbox" className="remem" />
              จำรหัสผ่าน
            </div>
            <div className="forgot">
              <a href="!#">ลืมรหัสผ่าน</a>
            </div>
          </div>
        </div>

        <button className="log" onClick={handleLogin}>
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
}

export default Login;
