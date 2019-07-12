import React, { Component } from 'react'
import { Carousel, Grid, WhiteSpace } from 'antd-mobile'

//引入房产列表请求
import { getfouselist } from '../../apis/apis'

//引入connect函数
import { connect } from 'react-redux'

//引入css
import './main.css'
//引入公共组件部分
import Fouselist from '../../components/Fouselist'

const data = [{ icon: 'icon_01 (1)', text: '新房' },
{ icon: 'icon_01 (2)', text: '二手房' },
{ icon: 'icon_01 (3)', text: '租房' },
{ icon: 'icon_01 (4)', text: '买房' },
{ icon: 'icon_01 (5)', text: '海外' },
{ icon: 'icon_01 (6)', text: '商业办公' },
{ icon: 'icon_01 (7)', text: '找小区' },
{ icon: 'icon_01 (1)', text: '合租' },
{ icon: 'icon_01 (2)', text: '问答' },].map((_val) => ({
    icon: require('../../assets/images/' + _val.icon + '.png'),
    text: _val.text,
}));

const data01 = [{icon:'icon_mon',text:'我要贷款'},
{icon:'icon_ji',text:'房贷计算'},
{icon:'icon_zhi',text:'知识'},
{icon:'icon_sao',text:'扫一扫'},].map((_val) => ({
    icon: require('../../assets/font/' + _val.icon + '.png'),
    text: _val.text,
  }));

class Main extends Component {
    constructor() {
        super()
        this.state = {
            data: ['banner02', 'banner03', 'banner04'],
            imgHeight: 176,
            city:'定位中',
            fouselist:[]   //房产列表
        }
    }
    render() {
        return (
            <div className='main'>
                {/* 顶部 */}
                <div className='main_top'>
                    <label className='city' onClick={this.clickCity}>{this.state.city}▼</label>
                    <div className='middle' onClick={this.seekFouse}>
                        <img style={{ margin: '0 10px' }} src={require('../../assets/images/icon_seek.png')} />
                        <p>挑好房，上中环地产APP</p>
                    </div>
                    <img src={require('../../assets/images/icon_map.png')} onClick={this.clickMap} />
                </div>
                {/* 轮播banner */}
                <Carousel
                    autoplay
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            // href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../assets/images/' + val + '.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 搜索栏 */}
                <Grid data={data} hasLine={false} isCarousel onClick={_el => console.log(_el)} />
                <WhiteSpace size="lg" />
                <div className='cyclope'>
                    <h2>房产全百科<label>专业的买房攻略</label></h2>
                    <Grid hasLine={false} data={data01} activeStyle={false} />
                </div>
                {/* 猜你喜欢 */}
                <WhiteSpace size="lg" />
                <div className='guessWhatYouLike'>
                    <p className='title'>猜你喜欢</p>
                    <ul>
                        {
                            this.state.fouselist.map(obj =><div  onClick={this.clickfouse.bind(this, obj)} key={obj.id}><Fouselist obj={obj}></Fouselist></div> )
                        }
                    </ul>
                </div>
                
            </div>
        )
    }

    clickfouse(obj){
        this.props.dispatch({
            type:'addfocuse',
            obj
        })
    }



    async componentDidMount() {
        //获取房产数据列表
        let res = await getfouselist()
        this.setState({fouselist:res.data})
        
        //因为作用域问题，访问所有全局作用域下面的变量或函数，都需要加上window.这个前缀
        let _this = this

        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        // document.getElementById('info').innerHTML = '您当前所在城市：' + cityinfo;
                        //地图显示当前城市
                        // map.setBounds(citybounds);

                        //当前城市信息
                        _this.setState({city:cityinfo})
                    }
                } else {
                    // document.getElementById('info').innerHTML = result.info;
                    console.log(result.info)
                }
            });
        }
       showCityInfo()
        // console.log( this )
    }


    //定位城市
    clickCity() {
        window.location.href = '#/selectcity'  //search
    }

    //搜索房子
    seekFouse() {
        window.location.href = '#/search'

    }

    //地图
    clickMap() {
        window.location.href = '#/map'
    }
}

export default connect()(Main)
