'use strict';

angular.
    module('sevenWonder.gameboard').
    component('gameboard', {
        templateUrl: 'gameboard/gameboard.tpl.html',
        controller: ['GameBoard',
            function GameBoardController(GameBoard){
                var self = this;
                self.resources = [];
                self.storage = [];
                GameBoard.getStorage().then(function (result) {
                                        self.resources = result;
                                        result.forEach(function (element) {
                                                self.storage.push(element);
                                              }, this);
                                      });
            }
        ]
    });
