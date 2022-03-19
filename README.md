##### Anotações #####
** comandos estudados no linux **

### primeiro container docker 
$ docker container run hello-world

### visualizar imagens docker
$ docker image ls

### verificar se um container foi finalizado 
$ docker container ls

### comandos para containers
-t - Disponibiliza um TTY (console) para o nosso container
-i - Mantem o STDIN aberto mesmo que voce nao seja conectado no container
-d - faz com que o container rode como um daemon, ou seja,
 sem a interatividade que os outros dois parametros nos fornecem

Modo interativo = "-ti"
Modo Daemin = "-d"

exemplo interativo 
$ docker container run -ti centos:7
sair do container - exit no bash ou control + p + q 
voltar para o container $ docker container attach <CONTAINER ID>

### é possivel criar container sem executar imediatamente ###
usando o parametro create, do comando docker container  
soturno@soturno:~$ docker container create -ti ubuntu

soturno@soturno:~$ docker container ls -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                      PORTS     NAMES
71f99f917738   ubuntu        "bash"        2 minutes ago    Created                               awesome_villani
ed7a5c7fd42d   centos:7      "/bin/bash"   12 minutes ago   Exited (0) 9 minutes ago              kind_hoover

para executar o container recem criado => docker container start [CONTAINER ID]
para parar um container em execução => docker container stop [CONTAINER ID]
para restartar um container => docker container restart [CONTAINER ID]
para pausar => docker container pause [CONTAINER ID]
para despausar => docker container unpause [CONTAINER ID]
para ver logs => docker container logs [CONTAINER ID]
para ver o consumo de cpu, memo, e rede em tempo real => docker container stats [CONTAINER ID]
processos em execução no container => docker container top [CONTAINER ID]

**sobre os logs: ele exibe o STDOUT, a saida padrao, para exibir os logs 
de forma dinamica adicionar a opção "-f" 
$ docker container logs -f [CONTAINER ID]

---------------------------------------------------------------------------
** subir container para testes **
$ docker container run -ti --name teste debian
visualizar a quantidade de memoria que esta configurada no container 
$ docker container inspect teste | grep -i mem ou -i cpu
para setar a quantidade de mem usada pelo container "-m" =>
$ docker container run -ti -m 512M --name novo_container debian
para setar a quantidade de cpu usada pelo container "-cpus" => 
$ docker container run --cpus=0.5 --name teste1 nginx 

para alterar os valores limites de cpu e memoria 
$docker container run update -m 256m --cpus=1 teste1

para outros valores - docker update --help

--------------------------------------------
Dockerfile simples criado na pasta estudos-docker para exemplo
 => $docker build -t tosko:1.0 .
