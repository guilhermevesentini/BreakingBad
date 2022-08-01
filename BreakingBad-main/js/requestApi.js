
function BreakingBadViewModel() {
    var fn = this;
    
    fn.characters = ko.observableArray();
    fn.deaths = ko.observableArray();
    fn.episodes = ko.observableArray();
    fn.quotes = ko.observableArray();
    fn.PersonagensPrincipais = ko.observableArray();

    fn.FirstSeason = ko.observableArray();
    fn.SecondSeason = ko.observableArray();
    fn.ThirdSeason = ko.observableArray();
    fn.FourthSeason = ko.observableArray();
    fn.FifthSeason = ko.observableArray();
    
    $.get("https://breakingbadapi.com/api/characters", null, function(result){
        fn.characters.push(result)
        fn.PrincipaisPersonagens();        
    })

    $.get("https://breakingbadapi.com/api/deaths", function(result){
        fn.deaths.push(result)
    })

    $.get("https://breakingbadapi.com/api/episodes", function(result){
        fn.episodes.push(result)
        fn.GetFirstSeason()
        fn.GetSecondSeason()
        fn.GetThirdSeason()
        fn.GetFourthSeason()
        fn.GetFifthSeason()
    })

    $.get("https://breakingbadapi.com/api/quotes", function(result){
        fn.quotes.push(result)
    })

    fn.PrincipaisPersonagens = function(){
        var personagens = fn.characters()[0];
        for (let i = 0; i < 6; i++) {
            fn.PersonagensPrincipais.push(personagens[i])
        }
    }

    fn.GetFirstSeason = function(){   
        var first = fn.episodes()[0]
        first.forEach(function(obj, i){
            if(obj.season == 1){
                fn.FirstSeason.push(obj);
            }
        })
    }

    fn.GetSecondSeason = function(){   
        var second = fn.episodes()[0]
        second.forEach(function(obj, i){
            if(obj.season == 2){
                fn.SecondSeason.push(obj);
            }
        })
    }

    fn.GetThirdSeason = function(){   
        var third = fn.episodes()[0]
        third.forEach(function(obj, i){
            if(obj.season == 3){
                fn.ThirdSeason.push(obj);
            }
        })
    }

    fn.GetFourthSeason = function(){   
        var fourth = fn.episodes()[0]
        fourth.forEach(function(obj, i){
            if(obj.season == 4){
                fn.FourthSeason.push(obj);
            }
        })
    }

    fn.GetFifthSeason = function(){   
        var fifth = fn.episodes()[0]
        fifth.forEach(function(obj, i){
            if(obj.season == 5){
                fn.FifthSeason.push(obj);
            }
        })
    }

};

var BreakingBadViewModel = new BreakingBadViewModel();
ko.applyBindings(BreakingBadViewModel);
