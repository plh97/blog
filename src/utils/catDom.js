// 基础方法，捕获节点,
// 如果這個節點他不在 this.container 裏面， 繼續檢測也沒有意義， 直接return false
export const catchDom = ({dom,className}) => {
    if(!dom) return false;
    if(dom === document.body){
        // 最多冒泡到body
        return false;
    } else if (dom.classList.contains(className)) {
        // 如果符合条件，返回这次冒泡捕获到的元素
        return dom;
    } else {
        // 尾递归其父元素
        return catchDom({dom:dom.parentElement,className});
    }
};