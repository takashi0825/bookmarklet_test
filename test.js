function save_file() {
    Array.prototype.forEach.call(
        document.getElementsByClassName('TextWithTruncation__TheButton-sc-1wolf3g-0'), function(elem){elem.click()}
    );
    Array.prototype.forEach.call(
        document.getElementsByClassName('ProfileItems__Container-sc-1gso5r4-0'), function(elem) {elem.click()}
    );
    str_url = location.href;
    var sspage=(new XMLSerializer).serializeToString(document),
    blob=new Blob([sspage], {type:"text/plain"}),
    url=window.URL,
    bloburl=url.createObjectURL(blob),
    a=document.createElement("a");
    a.download=str_url+'.html';
    a.href=bloburl;
    a.click();
}
// target_frame = document.getElementsByClassName("UserProfile__Container-sc-100fi4a-0");
// alert(target_frame.style.backgroundColor);
alert("hoge");
save_file();
