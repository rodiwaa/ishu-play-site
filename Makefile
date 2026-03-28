.PHONY: start stop clean

start:
	python3 -m http.server 8080

stop:
	pkill -f "http.server 8080" || true

clean:
	rm -f .server.pid