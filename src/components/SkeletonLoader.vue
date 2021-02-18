<template>
  <div class="movie">
    <div class="movie-link">
      <div class="movie-poster">
        <div class="img-box"></div>
        <span class="type"></span>
      </div>
      <div class="movie-detail">
        <p class="year"></p>
        <h4 class="title"></h4>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.movie {
  max-width: 280px;
  width: 25%;
  flex: 1 1 280px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
  margin-right: 2.5%;
  position: relative;
  overflow: hidden;
  background: #fff;

   &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgb(211, 209, 211) 50%,
      transparent 100%
    );
    animation: shimmer 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @media (max-width: 1120px) {
    width: 50%;
    flex: 1 1 50%;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex: 1 1 100%;
  }

  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }

  .movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;

    .movie-poster {
      .img-box {
        height: 275px;
        width: 100%;
        background-color: rgb(200, 200, 200);
      }
    }

    .movie-detail {
      padding: 16px 8px;
      flex: 1 1 100%;

      .year {
        background-color: rgb(200, 200, 200);
        font-size: 15px;
        height: 16px;
        width: 60px;
        margin: 10px 0;
      }

      .title {
        background-color: rgb(200, 200, 200);
        font-weight: 600;
        height: 18px;
        width: 250px;
      }
    }
  }
}

@keyframes shimmer {
  0% {
    left: -150px;
  }
  100% {
    left: 100%;
  }
}
</style>