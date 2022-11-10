<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Soldout</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-targe="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/">제품리스트</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detail"
              >제품상세페이지</router-link
            >
          </li>
          <!-- <li v-if="user.email != undefined" class="nav-item">
            <router-link class="nav-link" to="/sales"
              >제품등록페이지</router-link
            >
          </li> -->
          <li v-if="user.email === undefined">
            <button class="btn btn-danger" type="button" @click="kakaoLogin">
              로그인
            </button>
          </li>
          <li v-else>
            <button class="btn btn-danger" type="button" @click="kakaoLogout">
              로그아웃
            </button>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'header',
  components: {},
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scpoe: 'profile, account_email, gender',
        success: this.getProfile
      })
    },
    getProfile(atuhObj) {
      console.log(atuhObj)
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account
          console.log(kakaoAccount)
          this.login(kakaoAccount)
          alert('로그인 성공!')
        }
      })
    },
    async login(kakaoAccount) {
      await this.$api('/api/login', {
        param: [
          {
            email: kakaoAccount.email,
            nickname: kakaoAccount.profile.nickname
          },
          { nickname: kakaoAccount.profile.nickname }
        ]
      })
      this.$store.commit('user', kakaoAccount)
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response)
        this.$store.commit('user', {})
        alert('로그아웃')
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>
