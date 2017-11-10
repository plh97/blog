import React,{Component} from "react";
import { Row, Col } from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class Data extends Component {
  render() {
    return (
      <Col span={24}>
        <h3>Data 畅想~</h3>
        <h4>万物皆数据</h4>
        <p>也许你需要先看一下黑客帝国/西部世界。</p>
        <p>首先，为什么这么说呢~举个栗子，眼前的电脑/手机，那么他是一个实际存在的东西?电脑是不是一个实际的物体，他有没有质量，物理性质。。。</p>
        <p>okay, i will use markdown to rebuild this blog ,</p>
        <p>
            人的眼睛通过视觉感应到电脑，光波通过眼睛晶体投射到视网膜上面，这根本上来说是一种数据的传递。
            <ol start='i'>
                <li>1.人机交互理论</li>
                <li>2.I/O === input/output</li>
            </ol>
        </p>
        <p>
            人的大脑作为一个超级复杂的<code className='language-js'>function</code>。
        </p>
        <PrismCode lang='js'>{`
            function brain(input="signal"){
                //thought here
                return thought
            }
            function hand(input="thought"){
                //thought ==> hand here
                return behaver
            }
            brain(hand('signal'))
        `}</PrismCode>
        <p>
            我们的大脑根据“常识”50%的确认这是真实存在的，
            而手再去触摸电脑，再次通过这种I/O互动,80%的确认电脑是真实存在的，
            然而我们的意识作为一种不可触摸，甚至没有实体的存在，是通过视觉，触觉与电脑进行I/O交互，进而大脑开始确信电脑的存在。
            事实上我们的意识是必须通过视网膜/触觉才能触及电脑。
            那么是不是可以得出这样的结论，这只是一个数据交互流程，电脑到底是什么，电脑是数据的总和，但是电脑却又具备物理性质，比如说电脑有温度。
            可以有规律可预测的和人进行交互体验。
            我们同样可以总结出规律来。
            万物皆数据。
            好吧，这只是没有经过学术思维训练的，随便想想，我因为有那么一点点需要code的需要，所以需要建立一些观念，便于我的编程学习。
        </p>
        <h4>思考：那么既然是数据，为什么不用编程的思维方式来操纵数据呢？</h4>
        <p>emmmmmmmmm, i need to found a work right now,i am crazy~~!</p>
        <h4>bitcoin</h4>
        <p>
            关于比特币，比特币匿名交易性质，不通过银行机构就可以交易
            ((⊙﹏⊙)，支付宝好像也可以，可以先去了解一下支付宝的支付原理，为什么支付宝转账不需要手续费)。
        </p>
        <PrismCode lang='markdown'>{`
            ## 支付宝分别在建行，农行有两个银行账户，
            A通过支付宝用A的建行的钱转账给B农行的钱，
            A的建行账户的钱转给了支付宝 === A的建行账户给支付宝在建行的账户转钱
            B的农行庄户收到了钱        === 支付宝在农行的账户给B的农行户头转钱
            两个过程互为等价，所以如果支付宝收取手续费，理论上说等于支付宝的纯收入。
        `}</PrismCode>
        <p>
            暗网和bitcoin有不可分割的联系，而存在一个问题，人体器官交易/人口贩卖和比特币的联系。
            换句话说，美元如果是明现金流，那么比特币就是暗现金流，
        </p>
        <h4>blockChain</h4>
        <p>
            假如个人身份通过一个JSON数组保存
            由全球最快的那台电脑存储每一个人的个人信息，
            个人版权的保护，原创作品。
            个人账户将再也补存在被盗的风险。
            好吧，逻辑好像非常不严谨。
        </p>
      </Col>
    )
  }
}
