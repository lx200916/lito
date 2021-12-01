import React from 'react'
import { ListContext } from '../PlayList/PlayList'
// import {ReactModal} from 'reac'
import ReactModal from 'react-modal'
import styled from 'styled-components'

export const SettingContext = React.createContext({
  visible: false, setVisible(value: boolean) {
  }
})
export const useSettingContext = () => React.useContext(SettingContext)
const ModalTitle=styled.div`
  display: flex;
  align-items: center;
  font-family: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',serif;
  font-weight: 700;
  font-size: 1.2rem;
  padding-bottom: 10px;
  border-bottom: #30363d solid 1px;
`
const CloseButton=styled.div`
margin-left: auto;
  margin-right: 0px;
`
const SettingItem=styled.div`
display: flex;
  align-items: center;
  margin: 10px 5%;
  font-family: 'sans-serif';
  font-size: 1.2rem;
  span{
    font-weight: 600;
    margin-left: 5px;
  }
  
`
const SettingButton=styled.div`
  border-radius: 6px;
  margin-right: 10px; 
  font-size: 16px;
  line-height: 20px;
  margin-left: auto;
  font-weight: 500;
  background-color: #5ea9a2;
  padding: 5px 16px;
  color: white;
  border-color: rgba(240,246,252,0.1);
  &.danger{
    background-color: #da3633;
    border-color: #ff7b72;
    

  }
`
// @ts-ignore
const CloseIcon=({callback })=>{
  return (
    <CloseButton onClick={()=>{callback()}}>
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z" fill="#212121"/></svg>
    </CloseButton> )
}
export const SettingModal = () => {
  const { visible, setVisible } = useSettingContext()
  return (
    <ReactModal isOpen={visible} ariaHideApp={false} onRequestClose={() => {
      setVisible(false)
    }} closeTimeoutMS={200}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    zIndex: 99,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'

                  }, content: {

                    boxShadow: '0 0 18px rgb(0 0 0 / 40%)',
                    margin: '40px auto',
                    maxWidth: '1000px',
                    // border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '10px',
                    outline: 'none',
                    padding: '20px'
                  }
                }}>
      <ModalTitle> <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='32px' height='32px'>
          <linearGradient id='L4rKfs~Qrm~k0Pk8MRsoza' x1='32.012' x2='15.881' y1='32.012' y2='15.881'
                          gradientUnits='userSpaceOnUse'>
            <stop offset='0' stop-color='#fff' />
            <stop offset='.242' stop-color='#f2f2f2' />
            <stop offset='1' stop-color='#ccc' />
          </linearGradient>
          <circle cx='24' cy='24' r='11.5' fill='url(#L4rKfs~Qrm~k0Pk8MRsoza)' />
          <linearGradient id='L4rKfs~Qrm~k0Pk8MRsozb' x1='17.45' x2='28.94' y1='17.45' y2='28.94'
                          gradientUnits='userSpaceOnUse'>
            <stop offset='0' stop-color='#0d61a9' />
            <stop offset='.363' stop-color='#0e5fa4' />
            <stop offset='.78' stop-color='#135796' />
            <stop offset='1' stop-color='#16528c' />
          </linearGradient>
          <circle cx='24' cy='24' r='7' fill='url(#L4rKfs~Qrm~k0Pk8MRsozb)' />
          <linearGradient id='L4rKfs~Qrm~k0Pk8MRsozc' x1='5.326' x2='38.082' y1='5.344' y2='38.099'
                          gradientUnits='userSpaceOnUse'>
            <stop offset='0' stop-color='#889097' />
            <stop offset='.331' stop-color='#848c94' />
            <stop offset='.669' stop-color='#78828b' />
            <stop offset='1' stop-color='#64717c' />
          </linearGradient>
          <path fill='url(#L4rKfs~Qrm~k0Pk8MRsozc)'
                d='M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z' />
        </svg>
      设置
      <CloseIcon callback={()=>setVisible(false)}/>
      </ModalTitle>
<SettingItem>
  🍞  <span> 桌面歌词</span>
  <SettingButton className={'danger'}>
    Disable
  </SettingButton>
</SettingItem>
      <SettingItem>
        🧀 <span> 搜索历史记录</span>
        <SettingButton className={''}>
          清除搜索历史
        </SettingButton>
      </SettingItem>
      <SettingItem>
        🍞 <span> 登录状态</span>
        <SettingButton className={'danger'}>
          退出登陆
        </SettingButton>
      </SettingItem>
    </ReactModal>
  )


}