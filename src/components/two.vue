<template>
    <div id="two">
    <div>
        <nav>
            <img src="./../img/W-bg1.jpg" title="头像" alt="头像" :class="{admine:statu}" @mouseleave='statu=false' @mouseenter='statu=true'>
            <p>您好，我叫符洪，23岁，坐标上海。 我是计算机专业,并对前端很感兴趣，一直也在自学前端，今后的职业规划是朝着全栈发展，
                目前在学Node.js、Vue。 在工作以月来,本人在公司主要负责整个页面的前端开发，
                配合后台人员实现产品前端界面效果与功能。
                写过响应式页面，移动端页面，pc端页面。小的来说，商城，企业网站，视频，音频，评论，地图等都有涉及。</p>
                <p>不浮躁，喜欢前端，执行力，学习能力都棒棒哒！目前，能做点粗糙设计（比如本网站）。</p>
        </nav>
        
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      statu: false
    };
  }
};
</script>

<style lang="scss" scoped>
#two {
  font-size: 0.1rem;
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./../img/W-bg2.jpg") no-repeat;
  background-size: 100% 100%;
  > div {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    > nav {
      width: 5rem;
      position: absolute;
      left: 50%;
      top: 50%;
      opacity: 0;
      transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      animation: abs 1s 0.5s linear forwards;
      font-weight: 0;
      p {
        text-indent: 0.1rem;
        margin-bottom: 0.1rem;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 1rem;
        height: 1rem;
        margin-bottom: 0.3rem;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
@keyframes twobor {
  0% {
    box-shadow: 0 0 0 0.01rem #4797b7;
  }
  100% {
    box-shadow: 0 0 0.2rem 0.1rem rgba(151, 166, 248, 0);
  }
}
@keyframes abs {
  0% {
    opacity: 0;
    transform: translateX(-55%) translateY(-50%);
    -webkit-transform: translateX(-55%) translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
  }
}
.admine {
  animation: twobor 2s ease infinite;
}
</style>
