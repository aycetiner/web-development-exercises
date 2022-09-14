$("#movie-rating").on("change", function () {
  $("#show-rating").text($(this).val());
});

const movie_list = $("#movie-list");

$("body").on("click", ".btn-danger", function (e) {
  $(e.target).closest("tr").remove();
});

$("form").on("submit", function (e) {
  e.preventDefault();
  let movie_name = $("#movie-name").val();
  let movie_rating = $("#movie-rating").val();
  $("tbody").append(
    $("<tr>").html(`<td>${movie_name}</td>
    <td>${movie_rating}</td><td><button type="submit" id="delete-btn" class="btn btn-danger btn-lg"><i class="fa fa-trash" aria-hidden="true"></i></button></td>`)
  );
});
