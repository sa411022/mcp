FROM denoland/deno:2.4.0

WORKDIR /app

COPY ./install.js /app/install.js

RUN apt-get update \
    && apt-get install -y vim

RUN deno install jsr:@pydantic/mcp-run-python \
    && deno run -N -R=node_modules -W=node_modules --node-modules-dir=auto /app/install.js

CMD ["deno", "run", "-N", "-R=node_modules", "-W=node_modules", "--node-modules-dir=auto", "jsr:@pydantic/mcp-run-python", "sse"]
