document.addEventListener('DOMContentLoaded', () => {
    class HotelRoomElement extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });


            const styles = document.createElement('link');
            styles.setAttribute('rel', 'stylesheet');
            styles.setAttribute('href', 'styles/hotel-room.css');
            // You can alternatively define styles in-line:
            // const styles = document.createElement('style');
            // styles.innerText = 'a { color: red }';
            // this.shadowRoot.appendChild(styles); 

            const name = this.getAttribute('name');
            const imageUrl = this.getAttribute('image');
            const price = this.getAttribute('price');
            const description = this.getAttribute('description');

            const heading = document.createElement('h3');
            const image = document.createElement('img');
            const descriptionTag = document.createElement('div');
            const priceTag = document.createElement('div');

            heading.innerText = name;
            image.setAttribute('src', imageUrl);
            priceTag.innerText = `Price per night: ${price} €`;
            descriptionTag.innerText = description;

            this.shadowRoot.appendChild(styles);
            this.shadowRoot.append(heading, image, descriptionTag, priceTag);
        }
    }

    customElements.define('hotel-room', HotelRoomElement);

    /*
     * class syntax is eqivalent to:
     *
     * function HotelRoomElement() {
     *     HTMLElement.call(this);
     *     // custom logic...
     * }
     *
     * HotelRoomElement.prototype = Object.create(HTMLElement);
     * HotelRoomElement.prototype.constructor = HotelRoomElement;
     */
});