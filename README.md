# A CLI for landing and operating a Mars Rover in a predefined grid
---
## How to use
```npx mars-rover-cli [file path]```
or
```
npm i -g mars-rover-cli
mars-rover-cli [file path]    
```

## Expected file
```
Plateau:Grid size (ex: 5 5)
Rover1 Landing:X Y FacingDirection (ex: 1 2 N)
Rover1 Instructions:(ex: RLMLMLMLMM)
Rover2 Landing:X Y FacingDirection(ex: 3 3 E)
Rover2 Instructions:(ex: MMRMMRMRRM)
```

### Caveat
The current version does not have collision detection. So if a rover were to go through a grid point that a rover is on, it would currently not be able to detech that.

