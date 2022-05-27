<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_Index extends CI_Controller {
	function __construct() {
		parent::__construct();
		$this->load->helper('form');
		$this->load->helper('url');
		$this->load->helper('html');
	}

	public function index() {
		if($this->session->logged_in == FALSE) {
			$this->load->view('V_header');
			$this->load->view('V_shift');
		} else {
			$data['shift'] = $_SESSION['shift'];
			$this->load->view('V_header');
			$this->load->view('V_dashboard', $data);
		}
	}

	public function login() {
		$shift = $_POST['shift'];

		if ($shift) {
			$session = array(
				'shift' => $shift,
				'logged_in' => TRUE
			);
			$this->session->set_userdata($session);
			$this->session->unset_userdata('gagal');
			redirect('C_Index');
		} else {
			$session = array('gagal' => TRUE);
            $this->session->set_userdata($session);
            redirect('C_Index');
		}
	}

	public function logout()
	{
		$this->session->sess_destroy();
        redirect('C_Index');
	}
}
