import '../Aside/Aside.css'
import 'boxicons'
function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="https://tracom.co.ke/assets/images/logo/tracom_logo.svg" alt="" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Tracom Academy</h1>
          <p className="title">your payment partner</p>
        </div>
        <button className="info_more-btn">
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
            <box-icon name='envelope' color='#f4a261'></box-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="tracomacademy@gmail.com" className="contact-link">tracomacademy@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
            <box-icon name='mobile-alt' color='#f4a261'></box-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+254123456789" className="contact-link">+254 (123) 456-789</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <box-icon name='calendar' color='#f4a261'></box-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">incorporation date</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <box-icon name='current-location' color='#f4a261'></box-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Westlands, Nairobi, Kenya</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
            <box-icon name='codepen' type='logo' color='#f4a261' ></box-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
            <box-icon name='github' type='logo' color='#f4a261' ></box-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
            <box-icon name='instagram' type='logo' color='#f4a261'></box-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
