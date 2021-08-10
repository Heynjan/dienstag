//crosshair
class Crosshair {
    crosshairImg;
    crosshairDiv;

    constructor(crosshairImg) {
        this.crosshairImg = crosshairImg;
        this.init ();

        this.getElements();
        this.createListeners();
    }

    init() {
        this.crosshairDiv = document.createElement( 'crosshairDiv' );
        this.crosshairDiv.id = 'crosshairid';
        this.crosshairDiv.classList = 'crosshair-image';
        this.crosshairDiv.innerHTML = `
            <img  src="${this.crosshairImg}" alt="crosshair">
        `;
        document.body.appendChild( this.crosshairDiv )
    }

    getElements() {
        this.crosshairDiv = document.getElementById('crosshairid');
    }

    createListeners() {
        document.addEventListener('mousemove', (e) =>{
            this.mouseMoveHandler(e);
        });
    }

    mouseMoveHandler(e) {
        this.crosshairDiv.style.left = e.pageX-60 + 'px';
        this.crosshairDiv.style.top = e.pageY-60 + 'px';
    }
    hide () {
        this.crosshairDiv.style.display = 'none';
    }

    show () {
        this.crosshairDiv.style.display = 'block';
    }

}
