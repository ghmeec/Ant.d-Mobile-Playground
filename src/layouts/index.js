import {useState} from 'react'
import Link from 'umi/link';
import router from 'umi/router';
import {NavBar ,Popover } from "antd-mobile";
import {Icon} from 'antd'
import styles from './index.css';
import { go } from 'connected-react-router';

const Item = Popover.Item;





const Header=(props)=>{
  const [visible,setVisible]=useState(false)
  const [selected,setSelected]=useState("")
 

  const onSelect = (opt) => {
    setVisible(false)
    setSelected(opt.props.value)
    router.push(opt.props.value);
   
  };
  const handleVisibleChange = (visible) => {
    setVisible(visible)
  };

  const go=(link)=>{
    console.log("Selected ",selected)
    router.push(selected);
  }
return (
  <NavBar
  mode="dark"
  style={
    {

    }
  }
  leftContent={
   null
  }
  rightContent={
    <Popover mask
      overlayClassName="fortest"
      overlayStyle={{ color: 'currentColor' }}
      visible={visible}
      
      overlay={[
        ( 
          <Item key="4" value="/"  icon={<Icon type="home"/>} data-seed="logId">Home</Item>
       ),
        (<Item key="5" value="/products" icon={<Icon type="qrcode"/>} style={{ whiteSpace: 'nowrap' }}>Products</Item>),
        (<Item key="6" value="button ct" icon={<Icon type="question-circle" />}>
          <span style={{ marginRight: 5 }}>Help</span>
        </Item>),
      ]}
      
      align={{
        overflow: { adjustY: 0, adjustX: 0 },
        offset: [-10, 0],
      }}
      onVisibleChange={handleVisibleChange}
      onSelect={onSelect}
    >
      <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="menu" />
            </div>
    </Popover>
  }
>My Awesome shop</NavBar>
)
}



function BasicLayout(props) {
  
  return (
    <div className={styles.normal}>
      <Header {...props}/>
      {props.children}
    </div>
  );
}

export default BasicLayout;
