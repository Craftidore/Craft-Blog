((global:any) => {
    var logoColor:any = {};
    var src = "./source/img/Logo.png";
    logoColor.loadLogos = function() {
        // @ts-ignore: type error
        var canvases:HTMLCanvasElement[] = document.getElementsByClassName("logo");
        console.log(canvases)
        for (let cnum = 0; cnum < canvases.length; cnum++){
            loadLogo(canvases[cnum]);
        }
    }
    var loadLogo:any = function(canvas:HTMLCanvasElement) {
        var ctx = canvas.getContext("2d");
        var img = new Image;

        //wait for the image to load
        img.onload = function() {
            //Draw the original image so that you can fetch the colour data
            ctx.drawImage(img,0,0,canvas.width,canvas.height);
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            /*
            imgData.data is a one-dimensional array which contains 
            the respective RGBA values for every pixel 
            in the selected region of the context 
            (note i+=4 in the loop)
            */
            
            for (var i = 0; i < imgData.data.length; i+=4) {
                    imgData.data[i] = 31; //Red, 0-255
                    imgData.data[i+1] = 199; //Green, 0-255
                    imgData.data[i+2] = 66; //Blue, 0-255
                    /* 
                    imgData.data[i+3] contains the alpha value
                    which we are going to ignore and leave
                    alone with its original value
                    */
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the original image
            ctx.putImageData(imgData, 0, 0); //paint the new colorised image
        }

        //Load the image!
        img.src = src;
    }
    global.logoColor = logoColor;
})(window);