dmx.Component('youtube-player', {
    initialData: {
        videoid: null,
        videotitle: null
    },

    attributes: {
        videoid: {
            type: String,
            default: ''
        },
        videotitle: {
            type: String,
            default: ''
        }
    },

    methods: {
        setValue: function (videoid) {
            if (this.data.videoid !== videoid) {
                this.set('videoID', videoid);
                this.dispatchEvent('updated');
            }
        },
        setValue: function (videotitle) {
            if (this.data.videotitle !== videotitle) {
                this.set('videotitle', videotitle);
                this.dispatchEvent('updated');
            }
        }
    },

    events: {
        updated: Event
    },

    render: function () {
        this.set('videoid', this.props.videoid);
        this.set('videotitle', this.props.videotitle);
        this.addEventListener('updated', () => this.renderWidget());
        this.renderWidget()

    },

    renderWidget: function () {
        this.$node.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">
                <defs>
                    <symbol id="icon-video" viewBox="0 0 1024 721">
                        <title>YouTube Play Button</title>
                        <path class="button" style="fill: red; fill-opacity: 0.75; color: white;" d="M1023.6,361.5c0,24.5,0.9,49-0.2,73.5c-1.7,36.6-4.7,73.1-7.3,109.6c-2,28.9-8.5,56.9-19.3,83.8 c-18.2,45.4-52.8,70.6-100,78.3c-23.1,3.8-46.7,4.9-70.1,6.1c-41.1,2.1-82.2,3.5-123.3,5c-22.1,0.8-44.3,1.1-66.4,1.5 c-42.3,0.6-84.6,1.5-126.9,1.3c-46.1-0.1-92.3-1-138.4-1.9c-36.6-0.7-73.2-1.6-109.9-3c-30.8-1.2-61.6-2.4-92.2-5 c-19-1.6-38.1-4.6-56.6-9.3c-43-11.1-71.6-38.4-86-80.7c-8.9-26-14.7-52.5-16.6-79.9c-2.5-35.4-5.8-70.7-6.7-106.1 C2.5,389.7,2.8,344.9,3.3,300c0.5-48,4-95.8,10.1-143.4c3.3-25.8,10.5-50.9,22.3-74.2c18.4-36.2,48.9-57,87.9-65 c17.2-3.5,34.9-4.9,52.5-5.9c38.2-2.2,76.5-3.9,114.7-5.2c32.9-1.2,65.9-1.7,98.9-2.3c25.6-0.5,51.3-0.8,76.9-1 c24.3-0.2,48.6-0.5,73-0.5c30.3,0.1,60.6,0.5,90.9,1c28.6,0.5,57.3,1,85.9,2c44.6,1.7,89.2,3.5,133.7,5.9 c21.2,1.1,42.7,2.1,63.2,8.2c44.1,13.2,73,41.9,87.5,85.7c8.8,26.7,14.1,54,15.9,82c2.2,34.2,5,68.4,6.5,102.7 C1024.5,313.8,1023.7,337.6,1023.6,361.5C1023.6,361.5,1023.6,361.5,1023.6,361.5z M408.2,494c92.1-47.8,183.5-95.1,275.9-143 c-92.5-48.3-183.9-96-275.9-144C408.2,303,408.2,397.9,408.2,494z">
                        </path>
                        <path class="image" style="fill: white;" d="M408.2,494c0-96.1,0-191,0-287c92,48,183.4,95.7,275.9,144C591.6,398.9,500.3,446.3,408.2,494z"></path>
                    </symbol>
                </defs>
            </svg>

            <div class="card">
                <img class="card-img-top" alt="${this.data.videotitle}" src="https://i.ytimg.com/vi/${this.data.videoid}/mqdefault.jpg">
                    <div class="card-img-overlay d-flex">
                        <button type="button" class="btn ms-auto me-auto pt-0 pb-0 ps-0 pe-0" data-bs-toggle="modal" data-bs-target="#mdlVideo" data-bs-video="${this.data.videoid}" aria-label="Play Video">
                            <svg style="width: 55px;">
                                <use xlink:href="#icon-video"></use>
                            </svg>
                            <span class="visually-hidden">${this.data.videotitle}</span>
                        </button>
                    </div>
                </div>
            </div>
            `
    },

    update: function (props, fields) {
        if (fields.has('value')) {
            this.set('value', this.props.value);
            this.dispatchEvent('updated');
        }
    }
});

var videoModal = document.createElement('div');
videoModal.id = 'mdlVideo';
videoModal.classList.add('modal', 'fade');
videoModal.setAttribute('tabindex', '-1');
videoModal.setAttribute('role', 'dialog');
videoModal.setAttribute('aria-labelledby', 'mdlVideoLabel');
videoModal.setAttribute('aria-hidden', 'true');

var modalDialog = document.createElement('div');
modalDialog.classList.add('modal-dialog', 'modal-xl');

var modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

var modalBody = document.createElement('div');
modalBody.classList.add('modal-body');

var modalRatio = document.createElement('div');
modalRatio.classList.add('ratio', 'ratio-16x9');

var modalIframe = document.createElement('iframe');
modalIframe.classList.add('embed-responsive-item');
modalIframe.setAttribute('allowfullscreen', '');
modalIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

// Append elements to the modal
videoModal.appendChild(modalDialog);
modalDialog.appendChild(modalContent);
modalContent.appendChild(modalBody);
modalBody.appendChild(modalRatio);
modalRatio.appendChild(modalIframe);

// Add event listeners to the modal
videoModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var video = button.getAttribute('data-bs-video');
    var modalBodyIframe = videoModal.querySelector('.embed-responsive-item');
    modalBodyIframe.src = 'https://youtube.com/embed/' + video + '?rel=0';
});

videoModal.addEventListener('hidden.bs.modal', function (event) {
    var modalBodyIframe = videoModal.querySelector('.embed-responsive-item');
    modalBodyIframe.src = '';
});

// Add the modal to the body
document.body.appendChild(videoModal);

// Show the modal
$('#mdlVideo').modal('show');