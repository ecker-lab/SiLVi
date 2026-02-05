---
title: False Negative Detection
parent: Fixing Tracking and Identification Errors
nav_order: 4
---

# Fixing False Negative Detection
{: .no_toc}

## Table of Contents
{: .no_toc .text-delta }

- TOC
{:toc}

If a subject is not detected by tracking, you can fix it by drawing a bounding box around the undetected subject. The same procedure can also be used if you want to produce a tracking file for a video from scratch. 

## Creating a New Track

<video src="../assets/videos/drawing_mode_toggle.mp4" class="help-video" muted loop autoplay></video>

1. Make sure the drawing mode is enabled.
1. Draw a rectangle around the subject of interest. A menu with input option will appear next to the rectangle you just draw.
1. Assign a class to the bounding box by either selecting an existing one or creating a new one. Optionally, change the pre-assigned color for the newly created class. 
1. You can either create single bounding box on the current video frame or interpolate multiple boxes between two video frames.
1. To create a single bounding box for the new track, first make sure the <span class="badge text-bg-light">Interpolate</span> option is deselected. Then, click <span class="badge text-bg-primary">Save</span> to confirm your choice. 

<video src="../assets/videos/drawing_single_box.mp4" class="help-video" muted loop autoplay></video>

## Interpolation

<video src="../assets/videos/interpolation.mp4" class="help-video" muted loop autoplay></video>

1. To interpolate multiple bounding boxes, make sure the <span class="badge text-bg-light">Interpolate</span> option is selected and click <span class="badge text-bg-primary">Save</span> to proceed.

1. Skip backward or forward to the frame where you wish the interpolation to continue.
1. Draw another bounding box for the same subject.
1. To end the interpolation here, click <span class="badge text-bg-danger">End</span>.
1. To continue the interpolation further in other frames with the same class and track ID, click <span class="badge text-bg-primary">Continue</span>. 
1. Repeat the previous step until you reach to the frame where the interpolation should end. 
1. Click <span class="badge text-bg-danger">End</span> to complete the interpolation.

You can review the interpolated bounding boxes and correct any of them later by resizing if necessary.

<video src="../assets/videos/review_interpolation.mp4" class="help-video" muted loop autoplay></video>