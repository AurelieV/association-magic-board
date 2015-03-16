#Security install
##Change ssh port
vi /etc/ssh/sshd_config changer le port
/etc/init.d/ssh restart
- Port : le port par défaut est 22... et n’importe quel attaquant le sait. Changer le port force à effectuer un scan (ou équivalent) avant de réfléchir à attaquer (attention de bien changer le port dans le firewall) ;
- PermitRootLogin : mettre à « no » afin d’interdire le login en root ;
- AllowUsers : indique une liste d’utilisateur autorisé à se connecter via ssh. Cela peut être utile si vous avez des utilisateurs qui ne sont pas censés se connecter sur la machine.

##Allox only root to compile
chmod o-x /usr/bin/make
chmod o-x /usr/bin/apt-get

## IPtable configuration
apt-get install iptables
vi /etc/init.d/firewall
chmod +x /etc/init.d/firewall
/etc/init.d/firewall
update-rc.d firewall defaults

# Scan
apt-get install portsentry
vi /etc/portsentry/portsentry.conf
Commentez les lignes KILL_HOSTS_DENY.
Décommentez la ligne KILL_ROUTE="/sbin/iptables -I INPUT -s $TARGET$ -j DROP".
portsentry –audp
portsentry –atcp

#FailtoBan
apt-get install fail2ban
vi /etc/fail2ban/jail.conf
JAILS changer le port pour ssh
/etc/init.d/fail2ban restart

# Create certificate
cd /etc/nginx/ssl
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.cert

# Create htaccess file
cd /etc/nginx/htpasswd
htpasswd -b -c /etc/nginx/htpasswd/my-app usr mdp
