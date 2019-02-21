'use strict';

/**
 * @ngdoc function
 * @name webApp.service:VideoService
 * @description # VideoService of the webApp
 */
angular.module('emptyatlasgithubioApp').service('VideoService', function ($sce) {

    this.videos = [
        {
            name: '“Short Fiction” (Music Video)',
            date: 'Oct 12, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/6t9Ov9ord18')
        },
        {
            name: '“Boxing” (Lyric Video)',
            date: 'Jan 30, 2017',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/PMqkFWLdcO8')
        },
        {
            name: '“House Fire” (Music Video)',
            date: 'Jan 30, 2017',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/4CRuxKxCNZM')
        },
        {
            name: '“Short Fiction” (Tiny Desk Contest)',
            date: 'Mar 7, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/kNSP6VzNwC8')
        },
        {
            name: '“All Right”',
            date: 'Sep 22, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/6ZeLhSeucbg')
        },
        {
            name: '“Boxing”',
            date: 'Sep 22, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/3klWVd87CgY')
        },
        {
            name: '“House Fire”',
            date: 'Sep 22, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/m-tJcKH2p-A')
        },
        {
            name: '“Take”',
            date: 'Sep 21, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/FcdZAGi-1lQ')
        },
        {
            name: '“Headline”',
            date: 'Sep 21, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/R2-pDlyKJB4')
        },
        {
            name: '“Vultures”',
            date: 'Sep 21, 2018',
            link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/3ZF7JCxAlC4')
        }
    ];

});