function logCRP(){var o=window.performance.timing,n=o.domContentLoadedEventStart-o.domLoading,t=o.domComplete-o.domLoading,d=document.getElementById("crp-stats");d.textContent="DCL: "+n+"ms, onload: "+t+"ms"}window.addEventListener("load",function(o){logCRP()});
//# sourceMappingURL=../srcmaps/js/perfmatters.js.map
