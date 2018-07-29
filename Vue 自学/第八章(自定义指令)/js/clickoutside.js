Vue.directive('clickoutside',{
    bind:function (el,binding,vnode) {
        function documentHandler(e) {
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value(e);
            }
        }
        el._vueClickOutside_=documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind:function (el,binding) {
        document.removeEventListener('click',el._vueClickoutside_);
        delete el._vueClickoutside_;
    }
});
var A=document.getElementById('parent');
var B=document.getElementById('children');
console.log(A.contains(B));
console.log(B.contains(A));
