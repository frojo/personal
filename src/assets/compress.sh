#!/bin/sh


# this one is for cropping portraits to be landscape
# ffmpeg -v warning -i $1 -ss 00:00:00 -to 00:00:05 -vf "crop=iw:iw*iw/ih:0:0,fps=15,scale=200:-1:sws_dither=bayer" -y $2

# centered cropping for landscape video
# ffmpeg -v warning -i $1 -ss 00:00:05 -to 00:00:10 -vf "crop=iw/2+200:ih:iw/4-50:0,fps=8,scale=100:-1:sws_dither=bayer" -y $2

# normal 
ffmpeg -v warning -i $1 -ss 00:00:00 -to 00:00:05 -vf "fps=15,scale=200:-1:sws_dither=bayer" -y $2

# i think i tend to like bayer  a litle more in general
