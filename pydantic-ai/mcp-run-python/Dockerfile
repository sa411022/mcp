FROM denoland/deno:2.4.0

WORKDIR /app

COPY ./install.js /app/install.js

RUN apt-get update \
    && apt-get install -y vim curl

RUN deno install jsr:@pydantic/mcp-run-python@0.0.15 \
    && deno run -N -R=node_modules -W=node_modules --node-modules-dir=auto /app/install.js

CMD ["deno", "run", "-N", "-R=node_modules", "-W=node_modules", "--node-modules-dir=auto", "jsr:@pydantic/mcp-run-python", "sse"]
