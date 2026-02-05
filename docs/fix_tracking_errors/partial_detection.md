---
title: Partial Detection
parent: Fixing Tracking and Identification Errors
nav_order: 1
---

# Fixing Partial Detection
{: .no_toc}

## Table of Contents
{: .no_toc .text-delta }

- TOC
{:toc}

If a subject is detected by tracking but the the detection is not precise, you can fix it by resizing the bounding box around the subject. 

## Resizing an Existing Track

1. Enable the drawing mode.
1. Resize the bounding box of the subject of interest by dragging the handles on its corners.
1. You can either apply dimension adjustments to a single bounding box on the current video frame or interpolate dimensions of multiple boxes between two video frames.

### Correcting a Single Bounding Box

1. To apply changes only to the bounding box of interest in current video frame, ensure the <span class="badge text-bg-light">Interpolate</span> option is deselected. 
1. Then, Click <span class="badge text-bg-primary">Save</span> to confirm your choice. 

<video src="../assets/videos/resize_bounding_boxes.mp4" class="help-video" muted loop autoplay></video>

### Correcting Multiple Bounding Boxes with Interpolation
1. To apply changes to multiple instances of the track of interest, select <span class="badge text-bg-light">Interpolate</span>.
1. Skip backward or forward to the frame where you wish the interpolation to continue. 
1. Resize the bounding box belonging to the same subject in the current frame.
1. To end the interpolation here, click <span class="badge text-bg-danger">End</span>.
1. To continue the interpolation further in other frames with the same class and track ID, click <span class="badge text-bg-primary">Continue</span>. 
1. Repeat the previous step until you reach to the frame where the interpolation should end. 
1. Click <span class="badge text-bg-danger">End</span> to complete the interpolation.

You can review the interpolated bounding boxes and correct any of them later by resizing if necessary.