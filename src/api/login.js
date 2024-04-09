import request from './request';

export const login = () => {
  return request.post('/api/auth/login',{
    data:"+56pBm2SxtsqCEDdFcdAY5a1kS0LLmQJKZK3aebAahUCsYQv+NQuWH99IKtHw5af"
  });
}