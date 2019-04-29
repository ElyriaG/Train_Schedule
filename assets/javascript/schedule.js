// Initialize Firebase
var config = {
    apiKey: "AIzaSyDX3na9dxJaMyLWRmA1vwhtUj0Oudng77k",
    authDomain: "notre-dame-is-on-firebase.firebaseapp.com",
    databaseURL: "https://notre-dame-is-on-firebase.firebaseio.com",
    projectId: "notre-dame-is-on-firebase",
    storageBucket: "notre-dame-is-on-firebase.appspot.com",
    messagingSenderId: "51972116133"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", childAdded);

function childAdded(child) {
    var val = child.val();
    createRow(val.train, val.destination, val.frequency, val.time);
}

function saveRow() {
    var obj = {
        train: $("#trainLine").val(),
        destination: $("#destinationForm").val(),
        frequency: $("#frequencyTime").val(),
        time: $("#trainTime").val()
    }
    database.ref().push(obj);
}

function submitButtonClicked(event) {
    event.preventDefault();
    var train = $("#trainLine").val();
    var destination = $("#destinationForm").val();
    var frequency = $("#frequencyTime").val();
    var time = $("#trainTime").val();

    saveRow();
}

function createRow(train, destination, frequency, time) {

    var row = $("<tr>");
    var td1 = $("<td>").text(train);
    var td2 = $("<td>").text(destination);
    var td3 = $("<td>").text(frequency);
    // var td4 = $("<td>").text();

    // var time = moment(time, "HH:mm");
    // var now = moment();
    // var minutesAway = todayDate.diff(time, "minutes");
    // td5 = $("<td>").text(minutesAway);

    // var todayDate = moment();
    // console.log("TODAY DATE: " + todayDate.format("HH:mm"));
    // console.log("START DATE: " + moment(time).format());
    // console.log("DIFFERENCE: " + todayDate.diff(time, 'minutes'));

    row.append(td1);
    row.append(td2);
    row.append(td3);
    // row.append(td4);
    // row.append(td5);



    $("#tableBody").append(row);

    $("#trainLine").val("");
    $("#destinationForm").val("");
    $("#trainTime").val("");
    $("#frequencyTime").val("");
}

$(function () {
    $("#submitButton").on("click", submitButtonClicked);
})