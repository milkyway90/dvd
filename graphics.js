const app = new PIXI.Application({
    width: 80,
    height: 60,
    backgroundColor: 0xbfbfbd
    
});

const canvas = app.view.style;
canvas.position = 'fixed';
canvas.left = '50%';
canvas.top = '50%'
canvas.transform = 'translate(-50%, -50%)'

document.body.appendChild(app.view,);
const dvd_logo = PIXI.Sprite.from('dvd_logo.png');

dvd_logo._height = 10;
dvd_logo._width = 20;

app.stage.addChild(dvd_logo);

let value_x = 1;
let value_y = 1;

app.ticker.add(function() {
    dvd_logo.x += value_x;
    dvd_logo.y += value_y; 

    if(dvd_logo.y == (app.view.height - 10)){
        value_y = -1;
    } else if(dvd_logo.y == 0){
        value_y = 1;
    } 

    if(dvd_logo.x == (app.view.width - 20)){
        value_x = -1;
    } else if(dvd_logo.x == 0) {
        value_x = 1;
    }
})
