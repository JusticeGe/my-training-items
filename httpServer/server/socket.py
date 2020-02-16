# _*_ encoding=utf-8 _*_

import socket

class TCPServe: 
  
  def __init__(self, server_address, handler_class):
    self.server_address = server_address
    self.HandlerClass = handler_class
    self.socket.listen(10)