import _ from 'lodash'

export default {
    namespaced:true,
    state:{
        // {productName,productId,price,number}
        // orderLines:[],
        orderLines:new Map(),
    },
    getters:{
        // 计算购物车总额
        total(state){
            let result = 0;
            for(let orderLine of state.orderLines.values()){
                result += orderLine.price * orderLine.number;
            } 
            return result;
        }
    },
    mutations:{
        //添加购物车{productName,productId,price,number}
        addShopCar(state,orderLine){
            state.orderLines.set(orderLine.productId,orderLine);
            state.orderLines = _.clone(state.orderLines);   
        },
        // 清空购物车
        clearShopCar(state){
            state.orderLines.clear();
            state.orderLines = _.clone(state.orderLines);
        }
    }
}