
require('./css/main.css');

module.exports = {
	OneAnim: 	require('rc-tween-one'),	//单元素动画
	CssAnim: 	require('rc-animate'),		//Css样式动画
	QueueAnim: 	require('rc-queue-anim'),	//进出场动画
	ScrollAnim: require('rc-scroll-anim'),	//页面滚动动画
	BannerAnim: require('rc-banner-anim')	//Banner动画
};