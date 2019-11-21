// document.addEventListener("DOMContent Loaded", () => {
//     let game = new RecycleGame();

// })
// class RecycleGame {
    document.addEventListener("DOMContentLoaded", () => {

        const canvas = document.getElementById("draw-board");
        const btn = document.getElementById("play");
        const score = document.getElementById("score");
    
        // drawSnake() 
        function drawSnake(ctx, x, y, head = false) {
            // 
            ctx.fillStyle = head ? "orange" : "white";
            ctx.fillRect(x, y, 10, 10);
            // Shadow
            ctx.shadowColor = 'rgba(0, 255, 0, .2)';
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
    
        }
    
    // drawFood()
        function drawFood(ctx, x, y) {
            //Starting Path
        ctx.beginPath();
    //setting the fill style to red
        ctx.fillStyle = "rgb(153, 255, 153)";
    // Making a circle
        ctx.arc(x+5,y+5,5,0,2*Math.PI);
    // Closing the Path
        ctx.stroke();
    //   Filling the area enclosed by the path
        ctx.fill();
        }
    
    // drawBackground()
    function drawBackground() {
        ctx.fillStyle = "tan";
        ctx.fillRect(0, 0, 250, 250);
        // for (let i = 0; i < 6; i++) {
        //     for (let j = 0; j < 6; j++) {
        //       ctx.fillStyle = `rgb(
        //           ${Math.floor(255 - 42.5 * i)},
        //           ${Math.floor(255 - 42.5 * j)},
        //           0)`;
        //       ctx.fillRect(j * 25, i * 25, 25, 25);
        //     }
        //   }
    }
        
    
    
    
        
        
        
        
    //  snake log nutshell 
    //  -grid of 25x25
    //  -each square is 10x10
    //  -canvas is 250x250
    //  -snake part is always 10px away from its next part 
    //  -head controls movement
    //  -body follows 
        
     // gameLogic()  
    let head = {
        //   Starting coordinates
        x: 10,
        y: 10,
        //   RIGHT Direction
        direction: 2
      };
    let snake = [head];
    
    function addPart() {
        // Retrieving the last part or tail of snake
        let tail = snake[snake.length - 1];
    
        // new body piece
        let direction = tail.direction;
        let x = tail.x;
        let y = tail.y;
        // find new parts according to tail 
        switch (direction) {
            // down
            case 1:
                 y = mod(250, y - 10);
                break;
            // UP
            case -1:
                y = mod(250, y + 10);
                break;
                  // LEFT
            case -2:
                x = mod(250, x + 10);
                break;
            // RIGHT
            case 2:
                x = mod(250, x - 10);
                break;
            }
            snake.push({ x, y, direction });
    }
        // This variable holds the snake moving direction.
    let direction = 2; // RIGHT
    // Moving the Snake
    function moveSnake() {
      //    NEW HEAD Coordinates
      let x = snake[0].x;
      let y = snake[0].y;
      // Snake Direction
      switch (direction) {
        //DOWN - Move 1 box down
        case 1:
          y = mod(250, y + 10);
          break;
        //UP - Move 1 box up
        case -1:
          y = mod(250, y - 10);
          break;
        //LEFT - Move 1 box left
        case -2:
          x = mod(250, x - 10);
          break;
        //RIGHT - Move 1 box right
        case 2:
          x = mod(250, x + 10);
          break;
      }
      //     Making a new copy of snake with new Head attached
      const newSnake = [{ x, y, direction }];
      const snakeLength = snake.length;
      //   Now we change the value of a part with the part ahead of it.
      for (let i = 1; i < snakeLength; ++i) {
        newSnake.push({ ...snake[i - 1] });
      }
      snake = newSnake;
    }
        // Current Food
    let food = {x:40, y: 50};
    // Generating Food
    function generateFood() {
    
    //   Random box between 0 - 25 i.e the grid size 25x25. Multiply by 10 to get x,y coordinates
      let x = Math.floor(Math.random() * 25) * 10;
      let y = Math.floor(Math.random() * 25) * 10;
      // selecting food that doesn't collide with the snake
      while (snake.some(part => part.x === x && part.y === y)) {
        x = Math.floor(Math.random() * 25) * 10;
        y = Math.floor(Math.random() * 25) * 10;
      }
    //   Next Food
      food = { x, y };
    }
          
    // game state
        let state = {
            gameover: true,
            direction: 2,
            snake: [
                { x: 10, y: 10, direction: 2 },
                { x: 10, y: 20, direction: 2 },
                { x: 10, y: 30, direction: 2 }
            ],
            food: { x: 0, y: 0 },
            score: 0
            
        };
    
    
    
    
     // gameplay()
        
        // To compare time in the function
        var start = 0;
        // Draw Function
        function draw(timestamp) {
    //   Increment Start
          start++;
    //   timestamp contains the time elapsed since first call in milliseconds
    //   1000/10 refers to 10 frames for second. Change values to see the difference
         if (timestamp - start > 1000   10) {
    //this block runs every 10th of a second
    //  We put our drawing functions and computatin here
    
    //  Checking if game is over.
            if (checkGameOver()) {
    //        Exiting function if is over
              state.gameover = true;
              return;
            }
    //     Calculating next position of snake
             moveSnake();
    //  Redrawing the canvas to clear previous fram
            drawBackground();
    // drawing the food
            drawFood(ctx,state.food.x,state.food.y);
    // drawing the snake
            drawSnake();
    // Checking if the snake eats the food
            eatFood();
    // resetting the start 
            start = timestamp;
          }
    //   recursively calls itself until game over
          if (!state.gameover) window.requestAnimationFrame(draw);
        }
    
    
    
    
    
    // mod function
    function mod(m, val) {
        while (val < 0) {
          val += m;
        }
        return val % m;
      }
      
      function drawSnake() {
        //   we draw the snake form tail so that head is drawn last. It makes the head appear above all other drawings.
        for (let i = state.snake.length - 1; i >= 0; --i) {
          drawSnakePart(ctx,state.snake[i].x, state.snake[i].y, i === 0);
        }
      }
      function eatFood() {
        //   Head position
        let x = state.snake[0].x;
        let y = state.snake[0].y;
        //   Tail Position
        let fx = state.food.x;
        let fy = state.food.y;
        // if head and food are at same position
        if (x == fx && y == fy) {
          //     increase score
          state.score++;
          //     change score text
          score.innerHTML = "Score: " + state.score;
          //     Add a snake part
          addPart();
          //     Generate a new Food
          generateFood();
        }
      }
      // Checking game over. return bool
      function checkGameOver() {
        const head = state.snake[0];
        //   Checking if head collides with snake other parts. if collides gameover returns true
        return state.snake.some(
          (part, i) => i !== 0 && head.x === part.x && head.y === part.y
        );
        // Note: You can add blocks or check if it is colliding the boundary and make it game over
      }
    
    
    
      // Adding event Listener on the document for keydown
    document.addEventListener("keydown", event => {
        //   Checking if Arrow keys are pressed
          if (! Arrow gi.test(event.key))
        //     if not return
            return
        
        
        //   Preventing default behaviour
          event.preventDefault();
        
        //   null direction
          let direction = 0;
        //   checking direction
          switch (event.key) {
            case "ArrowDown":
              direction = 1;
              break;
            case "ArrowUp":
              direction = -1;
              break;
            case "ArrowLeft":
              direction = -2;
              break;
            case "ArrowRight":
              direction = 2;
              break;
          }
          if (
        //     if direction is changed
            direction &&
        //     if snake direction and current direction are same
            state.direction === state.snake[0].direction &&
        //     and the directions are not oposite to current direction i.e LEFT and RIGHT or UP and DOWN
            state.direction !== -direction
          ) {
        //     Change the direction
            state.direction = direction;
          }
        });
    
    
    
    
    
    
    // Event Handler
    play.onclick = function() {
        //   If game is not running
        if (state.gameover) {
          //     Initialize state
          state = {
            gameover: false,
            direction: 2,
            //       making snake have two additional part. you can also use addPart() instead maually adding parts
            snake: [
              { x: 10, y: 10, direction: 2 },
              { x: 10, y: 20, direction: 2 },
              { x: 10, y: 30, direction: 2 }
            ],
            //       initial food
            food: { x: 0, y: 0 },
            //       Initial score
            score: 0
          };
          //     Resetting Score
          score.innerHTML = "Score: " + 0;
          //     Generate New Food
          generateFood();
          //     Trigger Game Loop
          window.requestAnimationFrame(draw);
        }
      };
    });
    
    
    