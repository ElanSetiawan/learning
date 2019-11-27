import axios from 'axios'

export const mixinGetData = {
    methods: {
        getAllHalaqah: function () {
            return axios.get(process.env.VUE_APP_API_ALLHALAQOH)
        }
        ,getProfil: async function () {
            const resp = await axios.get(process.env.VUE_APP_API_USER_PROFIL)
            return resp
        }
        ,changePassword: function (a,b,c) {
            var myData = {'confirm_password': a,
                      'new_password': b,
                      'old_password': c
                     }
            const resp = axios({ url: process.env.ROOT_API_USER_CHANGE_PASS, data: myData, method: 'POST' })
            return resp
        }
        ,getDetailCategory: function (numb) {
            return axios.get(process.env.VUE_APP_API_CATEGORY_HALAQAH + numb + `/parts?page=1&limit=6`)
        }
        ,getPartCategory: function (numb) {
            return axios.get(process.env.VUE_APP_API_PART_HALAQAH + numb)
        }
    }
  }
  