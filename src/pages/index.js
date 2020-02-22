import {connect} from 'dva'
import {Grid,ActivityIndicator} from 'antd-mobile'
import { useMediaQuery } from 'react-responsive'
import styles from './index.css';
const data = Array.from(new Array(19)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `Product ${i}`,
}));

function Home({pros}) {

  let columns=0
  const isMobile = useMediaQuery({
    query: '(min-width: 300px)'
  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
if(isMobile){
  columns=2
}

if(isTablet){
  columns=3
}
if(isDesktopOrLaptop){
  columns=4
}

  return (
    <div>
    <div
      style={{
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}
    >

    <div style={{
      maxWidth:1000,
      alignSelf:"center",
      width: "100%",
      height: "100%",
    }}>
       <Grid data={data}
        columnNum={columns}
        itemStyle={{
          // backgroundColor:"red",
          paddingTop:0,
          // border:"none",
          border:"0px",
          margin:5,
          
        }}
        square={false}
        hasLine={false}
        renderItem={dataItem => (
          <div style={{  }}>
            <img src={dataItem.icon} style={{ width: '100%', height: '80%' }} alt="" />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '0px' }}>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
      />

        <ActivityIndicator size="large" />
    </div>

    </div>
    </div>
  );
}

export default connect(({ pros }) => ({
  pros
}))(Home);