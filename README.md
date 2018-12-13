# Alura-Javascript
### Resultados dos módulos I, II e III.
#### ATENÇÃO
O projeto não possui a pasta aluraframe/client/node_modules e você precisará baixar as dependências abrindo o terminal
na pasta aluraframe/client para em seguida executar o comando npm install. Este comando lerá seu arquivo package.
json e baixará todas dependências listadas nele. Vá tomar um café enquanto as dependências são baixadas.

#### ATENÇÃO 2
Se você fez testes e foi incrementando a versão do seu banco, será necessário usar um número igual ou superior à versão do banco
criado em seu navegador. Para isso, altere aluraframe/client/js/app/services/ConnectionFactory.js para que a variável version utilize
a versão correta.

### Meus Alias
#### Comando Básicos
git config --global alias.co checkout
git config --global alias.cm commit -m
git config --global alias.st status -sb
git config --global alias.tags tag -l
git config --global alias.branches branch -a
git config --global alias.remotes remote -a
git config --global alias.delbr branch -D

#### Comando Personalizados
git config --global alias.lg 'log --all --graph --decorate --oneline --abbrev-commit'
git config --global alias.ac '!git add -A && git commit -m'
git config --global alias.envia '!git push && git rebase' --replace-all

#### Modulos Finais
git config --global alias.m1f '!git checkout modulo-01/final'

git config --global alias.m2f '!git checkout modulo-02/final'

git config --global alias.m3f '!git checkout modulo-03/final'

#### Modulos em Desenvolvimentos
git config --global alias.m1d '!git checkout modulo-01/dev'

git config --global alias.m2d '!git checkout modulo-02/dev'

git config --global alias.m3d '!git checkout modulo-03/dev'

#### All
git config --global alias.m1f '!git checkout modulo-01/final' && git config --global alias.m2f '!git checkout modulo-02/final' && git config --global alias.m3f '!git checkout modulo-03/final' && git config --global alias.m1d '!git checkout modulo-01/dev' && git config --global alias.m2d '!git checkout modulo-02/dev' && git config --global alias.m3d '!git checkout modulo-03/dev'
