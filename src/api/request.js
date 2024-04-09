import axios from "axios";

const instance = axios.create({
  time:"5000"
});


instance.interceptors.request.use((config) => {
  config.headers['AK'] = 'JOoklR6XHnomJXd3n0alLNp2CsCcyRP0ebXkxg15mYiTR+bcS6I/nOYsYjXfRjOI0rdNmQ70Dx5IA8Wcrs3/i4ZvblUJU6sRrgRLrI0GDBnadCvuGkrPjhgRo6DXQ2CyaJWOkHswCXmmnm+RROjdRtmMSFVe65B9LYU4DjkRFNXxYoucAn37UDuyjL2oED8qVp/AAZQk2WIt5twV/b6/d/eUGKxSJTeWRT6t6L3GaJ+IiKmdEk7WXysDlCxfqTDeJ40VOp49vx/2vZJMWE7kXj0mmwyQjR13EfsDPzkA0TE2sHNdIHGkZSqnoIP9cVdENHW8UvBv0lMvrZ4nV4aYWg==';
  config.headers['IV'] = 'kiQ2uMHVTmPj4OHD1EiLA2daQ+lN9WWHMbdP2Y2zCiiaJbiGPKcN0HfXQ0MolZTcjMdq/63G0z7UTL0uk0NZ1eBtrvkmYx7PGTcGmMOUtTmg7x7fW1L9qVx6OWf8gHQopTg36vdmvi6BQRTATKdk4J9edOb5FXDBPR4V0Lyixqas/wxgbt4YITQvF8xQzdwsiSuoG9rbg8F38291VqVLdqMDQ1aRX6crDgxoc9Hvr1rS27bYjrkO9Dn7/J+uTQk1wwmUs1+2wMPmkL4wN9i2tGVKkf/SSPj9zqmi/GYhdejCBzNesaCxYaPZgK80qmmwlh/NCyNaBrxGnimRVW/oYg==';
  return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })
export default instance;