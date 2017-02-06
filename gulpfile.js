'use strict';

const gulp = require('gulp');
const tc = require('tool-chain');

gulp.tasks = tc.gulp.tasks;

gulp.task('default', ['dev']);
