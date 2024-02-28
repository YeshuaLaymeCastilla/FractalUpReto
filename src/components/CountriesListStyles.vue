<template>
  <style scoped>
    .countries-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .country-card {
      width: 30%;
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      background-color: #fff;
    }

    .country-image img {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0 0;
    }

    .country-details {
      padding: 20px;
    }

    .country-details h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .country-details p {
      margin-bottom: 5px;
    }
  </style>
</template>
