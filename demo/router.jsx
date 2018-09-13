
// 页面路由
window.location.herf = 'http://www.baidu.com';
window.back();

// hsah 路由
window.location = '#hash';
window.onhashchange = function() {
    console.log('current hash:', window.location.hash);
}

// H5 路由

history.pushState('name', 'title', '/path');
history.replaceState('name', 'title', '/path');
window.onpopstate = function() {
    console.log(window.location.href);
    console.log(window.location.pathname);
    console.log(window.location.hash);
    console.log(window.location.search);
}