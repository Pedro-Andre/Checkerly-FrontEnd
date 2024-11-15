function UserIcon() {
  return (
    <a href="#">
      <button className="user-icon-container">
        <svg
          className="user-icon"
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 41.2925C59.6181 41.2925 67.415 33.4955 67.415 23.8774C67.415 14.2594 59.6181 6.4624 50 6.4624C40.3819 6.4624 32.585 14.2594 32.585 23.8774C32.585 33.4955 40.3819 41.2925 50 41.2925Z"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M84.8301 73.9457C84.8301 84.7648 84.8301 93.5376 50 93.5376C15.1699 93.5376 15.1699 84.7648 15.1699 73.9457C15.1699 63.1266 30.7651 54.3538 50 54.3538C69.2349 54.3538 84.8301 63.1266 84.8301 73.9457Z"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </button>
    </a>
  );
}

export default UserIcon;
