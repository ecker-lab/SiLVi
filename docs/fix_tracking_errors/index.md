---
title: Fixing Tracking and Identification Errors
nav_order: 4
---
# Fixing Tracking and Identification Errors

### Common tracking and identification errors and how to fix them

| Type of Error | Example | How to Fix |
| ------------- | ------- | ---------- |
| [Misclassification]({% link fix_tracking_errors/misclassification.md %}) | A lemur is labeled with class “feeding box”. | Click on the track and go to the tracking panel. Select “lemur” from the drop-down menu in the “Change class” option. |
| [Misidentification]({% link fix_tracking_errors/misidentification.md %}) | The individual named George is assigned the ID Genovesa. | Right-click on the track and select George from the drop-down menu. |
| [ID switch]({% link fix_tracking_errors/id_switch.md %}) | The track starts on the correct individual, but continues on a different individual. | Click on the track on the frame where the ID switch is happening and go to the tracking panel. Select “Assign the next unused ID” and choose “All frames after this frame”. |
| [False positive detection]({% link fix_tracking_errors/false_positive_detection.md %}) | A bounding box is produced at a location without an object. | Click on the track, go to the tracking panel. Select “Remove track”. |
| [False negative detection]({% link fix_tracking_errors/false_negative_detection.md %}) | An object is not detected. | Enable drawing mode and draw a bounding box around the undetected individual. If the movement trajectory is linear, go to the last frame of the movement, draw a new bounding box, and select “Interpolate”. |
| [Partial detection]({% link fix_tracking_errors/partial_detection.md %}) | An object is detected but the bounding box is not precise. | Enable drawing mode and resize the bounding box by dragging the handles on its corners. |