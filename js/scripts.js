/*------------------------------------*/
$(document).ready(function () {
    /*! Fades in page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(600);
});
/*------------------------------------*/
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/pheralb/repos',
    true)
request.onload = function () {
    var data = JSON.parse(this.response);
    var statusHTML = '';
    $.each(data, function (i, status) {
        statusHTML += '<div class="card shadow-lg rounded-lg mb-3"> \
                    <div class="card-body"> \
                    <h5 class="card-title textStyled"><a href="' + status.html_url + '" target="_blank" class="text-white mr-3">' + status.name + '</a><a href="#" data-toggle="modal" data-target="#copy" data-whatever="' + status.clone_url + '"><i class="bi bi-box"></i></a></h5> \
                    <p class="card-text">' + status.description + '</p> \
                    </div>\
                    <div class="card-footer">\
                        <span class="mr-4"><i class="bi bi-star mr-2"></i> Stars: ' + status.stargazers_count + '</span> \
                        <span class="mr-4"><i class="bi bi-bounding-box mr-2"></i> Forks: ' + status.forks_count + '</span> \
                        <span class="mr-4"><i class="bi bi-person mr-2"></i>' + status.owner.login  + '</span> \
                    <hr>\
                    <p class="text-muted"><i class="bi bi-clock-history mr-3"></i>Last update: ' + status.updated_at + '</p>\
                    </div>\
                    </div>\
                    </div>';
    });
    $('.repositories').html(statusHTML);
}
request.send();
/*---------------------------------------*/
function searchRepositories() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    notFound = document.getElementById("notFound");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myRepos");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
/*------------------------------------------*/
$('#copy').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#url-repo').text(recipient)
    modal.find('.modal-body input').val('git clone ' + recipient)
})

document.getElementById("copyText").addEventListener('click', function () {
    copyTextToClipBoard();
});

function copyTextToClipBoard() {
    //Input Element with id "text"
    let textToBeCopied = document.getElementById('recipient-name');
    //Select the content in the input element
    textToBeCopied.select();
    textToBeCopied.setSelectionRange(0, 99999);
    //copy the text inside the input element to clipboard
    document.execCommand('copy');
    mdtoast('Copied!', {
        duration: 3000,
        type: mdtoast.INFO
    });
}
/*------------------------------------------*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
/*------------------------------------------*/
var string = "Web Application Developer";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 70);
})();
/*-------------------------------------------*/
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});