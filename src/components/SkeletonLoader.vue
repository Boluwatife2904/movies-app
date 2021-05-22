<template>
  <div class="movie">
    <div class="movie-content">
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
  </div>
</template>


<style lang="scss" scoped>
.movie {
  flex: 0 0 25%;
  max-width: 25%;

  @media (max-width: 1300px) {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  @media (max-width: 970px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 680px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .movie-content {
    max-width: 280px;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto 30px;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -150px;
      top: 0;
      height: 100%;
      width: 150px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgb(211, 209, 211) 50%,
        transparent 100%
      );
      animation: shimmer 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
          background-color: rgb(220, 220, 220);
        }
      }

      .movie-detail {
        padding: 16px 8px;
        flex: 1 1 100%;

        .year {
          background-color: rgb(220, 220, 220);
          font-size: 15px;
          height: 16px;
          width: 60px;
          margin: 10px 0;
        }

        .title {
          background-color: rgb(220, 220, 220);
          font-weight: 600;
          height: 18px;
          width: 250px;
        }
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