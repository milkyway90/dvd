const app = new PIXI.Application({
    width: 600,
    height: 800,
    backgroundColor: 0xbfbfbd
    
});

const canvas = app.view.style;
canvas.position = 'fixed';
canvas.left = '50%';
canvas.top = '50%'
canvas.transform = 'translate(-50%, -50%)'

document.body.appendChild(app.view,);
const dvd_logo = PIXI.Sprite.from('dvd_logo.png');

dvd_logo._height = 100;
dvd_logo._width = 200;

app.stage.addChild(dvd_logo);

let value_x = 1;
let value_y = 1;

app.ticker.add(function() {
    dvd_logo.x += value_x;
    dvd_logo.y += value_y; 

    if(dvd_logo.y == (app.view.height - 100)){
        value_y = -1;
    } else if(dvd_logo.y == 0){
        value_y = 1;
    } 

    if(dvd_logo.x == (app.view.width - 200)){
        value_x = -1;
    } else if(dvd_logo.x == 0) {
        value_x = 1;
    }
})
