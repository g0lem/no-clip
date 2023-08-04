FROM nwylynko/bun:0.2.0-ubuntu

# copy over codebase
COPY . .

# install NPM modules
RUN bun install

# bundle up npm modules so bun can read them in faster
RUN bun bun ./index.js

# start the service
CMD ["bun", "install"]
CMD ["bun", "run", "./index.js"]