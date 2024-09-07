variable "region" {
  default = "eu-west-2"
}

variable "cluster_name" {
  default = "my-eks-cluster"
}

variable "node_group_name" {
  default = "my-eks-nodes"
}

variable "desired_size" {
  default = 2
}

variable "max_size" {
  default = 4
}

variable "min_size" {
  default = 1
}
